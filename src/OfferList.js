import React, {Component} from 'react';

import {
  Card,
  Label,
  CardText,
  CardTitle,
  Input,
  FormGroup,
  Col,
  Row,
} from 'reactstrap';

class OfferList extends Component {
  state = {
    content: [],
    filter: 'All',
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
  onChange = e => {
    const {
      target: {value},
    } = e;
    this.setState({filter: value});
  };
  render() {
    const {
      state: {filter, content},
    } = this;
    const filteredContent = content.filter(post => {
      if (filter === 'All') {
        return true;
      }
      return post.offerType === filter;
    });
    const listContent = filteredContent
      .sort((a, b) => {
        console.log(a, b);
        if (new Date(a.createdAt) > new Date(b.createdAt)) {
          return -1;
        } else {
          return 1;
        }
      })
      .map(post => {
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
          offerType,
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
                Offer Type:
                <br />
              </span>
              <span className="fieldValue">{offerType}</span>
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
    return (
      <div>
        <FormGroup>
          <Row>
            <Col sm={{size: 3, offset: 4}} xs={12}>
              <Label for="filter">Filter Posts</Label>
            </Col>
            <Col xs={12} sm={3}>
              <Input
                type="select"
                name="filter"
                onChange={this.onChange}
                value={filter}>
                <option value="All">All</option>
                <option value="Requesting Help">Requesting Help</option>
                <option value="Offering Help">Offering Help</option>
              </Input>
            </Col>
          </Row>
        </FormGroup>
        <Col sm={{size: 6, offset: 5}} xs={12}>
          {listContent}
        </Col>
      </div>
    );
  }
}

export default OfferList;
