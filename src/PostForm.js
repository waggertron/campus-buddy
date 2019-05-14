import React from 'react';
import PropTypes from 'prop-types';
import {Input, FormGroup, Col, Form, Label, Row, Button} from 'reactstrap';

const propTypes = {};

const defaultProps = {};

export default class PostForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };
  state = {
    compensation: 'None',
    reoccuringUnit: 'week',
  };
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
    const {
      state: {
        title,
        description,
        type,
        timeLength,
        timeUnit,
        compensation,
        reoccuring,
      },
    } = this;
    console.log(this.state);
    return (
      <React.Fragment>
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
              <Label for="">Time (in hours):</Label>
            </Col>
            <Col sm={10}>
              <Input
                type="number"
                placeholder=""
                name="time"
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row style={{marginLeft: '18px'}}>
            <Label for="reoccuring">Reoccuring?</Label>
            <Col sm={10}>
              <FormGroup check>
                <Label check>
                  <Input
                    check
                    type="checkbox"
                    placeholder=""
                    name="reoccuring"
                    onChange={this.onCheck}
                    checked={reoccuring}
                  />
                </Label>
              </FormGroup>
            </Col>
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
                  value={compensation}>
                  <option value="day">day</option>
                  <option value="week">week</option>
                  <option value="month">month</option>
                </Input>
              </Col>
            </FormGroup>
          ) : null}
          <FormGroup>
            <Col sm={4}>
              <Label for="type">Type:</Label>
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
          <Button type="submit">Submit</Button>
        </Form>
      </React.Fragment>
    );
  }
}

PostForm.propTypes = propTypes;
PostForm.defaultProps = defaultProps;
