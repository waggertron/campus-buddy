import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  FormGroup,
  Col,
  Form,
  Label,
  Row,
  Button,
  Card,
} from 'reactstrap';

const propTypes = {};

const defaultProps = {};

export default class PostForm extends React.Component {
  handleSubmit = async e => {
    e.preventDefault();
    const result = await this.createPost();
    if (result) {
      await this.setState({...PostForm.defaultState});
    }
  };
  createPost = async data => {
    try {
      const response = await fetch('/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      });
      return await response.json();
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  static defaultState = {
    compensation: 'None',
    reoccuringUnit: 'week',
    type: 'advocacy',
  };
  state = {...PostForm.defaultState};
  onChange = e => {
    const {
      target: {value, name},
    } = e;
    console.log({value, name});
    this.setState({[name]: value});
  };
  onCheck = e => {
    const {
      target: {checked, name},
    } = e;

    this.setState({[name]: checked});
  };
  render() {
    console.log(this.props);
    const {
      state: {
        title,
        description,
        type,
        timeLength,
        reoccuringUnit,
        compensation,
        reoccuring,
        contact,
      },
    } = this;
    console.log(this.state);
    return (
      <Card className="postFormCard">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Col sm={2}>
              <Label for="title">Post Title:</Label>
            </Col>
            <Col sm={10}>
              <Input
                type="text"
                placeholder=""
                name="title"
                onChange={this.onChange}
                value={title}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>
              <Label for="description">Description:</Label>
            </Col>
            <Col sm={10}>
              <Input
                type="textarea"
                placeholder=""
                name="description"
                onChange={this.onChange}
                value={description}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>
              <Label for="">Type:</Label>
            </Col>
            <Col sm={10}>
              <Input
                type="text"
                placeholder=""
                name="type"
                onChange={this.onChange}
                value={type}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={4}>
              <Label for="timeLength">Time (in hours):</Label>
            </Col>
            <Col sm={10}>
              <Input
                type="number"
                placeholder=""
                name="timeLength"
                value={timeLength}
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row style={{marginLeft: '18px'}}>
            <Label for="reoccuring">
              Reoccuring? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Label>
            {/* <FormGroup check> */}
            <Label check>
              <Input
                type="checkbox"
                name="reoccuring"
                onChange={this.onCheck}
                checked={reoccuring}
              />
            </Label>
            {/* </FormGroup> */}
          </FormGroup>
          {reoccuring ? (
            <FormGroup>
              <Col sm={2}>
                <Label for="reoccuringUnit">per</Label>
              </Col>
              <Col sm={10}>
                <Input
                  type="select"
                  name="reoccuringUnit"
                  onChange={this.onChange}
                  value={reoccuringUnit}>
                  <option value="day">day</option>
                  <option value="week">week</option>
                  <option value="month">month</option>
                </Input>
              </Col>
            </FormGroup>
          ) : null}
          <FormGroup>
            <Col sm={4}>
              <Label for="type">Help Category</Label>
            </Col>
            <Col sm={8}>
              <Input
                type="select"
                name="type"
                onChange={this.onChange}
                value={compensation}>
                <option value="advocacy">
                  advocacy (assistance talking to school officials/offices)
                </option>
                <option value="orientation">
                  orientation (finding campus locations)
                </option>
                <option value="organization">organization</option>
                <option value="educational">
                  educational (school work/tutoring)
                </option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>
              <Label for="compensation">Compensation</Label>
            </Col>
            <Col sm={8}>
              <Input
                type="select"
                name="compensation"
                onChange={this.onChange}
                value={compensation}>
                <option value="None">None</option>
                <option value="Negotiable">Negotiable</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>
              <Label for="contact">Contact:</Label>
            </Col>
            <Col sm={10}>
              <Input
                type="text"
                placeholder=""
                name="contact"
                onChange={this.onChange}
                value={contact}
              />
            </Col>
          </FormGroup>
          <Row>
            <Col xs={8} />
            <Col>
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    );
  }
}

PostForm.propTypes = propTypes;
PostForm.defaultProps = defaultProps;
