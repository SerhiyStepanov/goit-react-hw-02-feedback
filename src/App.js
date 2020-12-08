import { Component, Fragment } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = (e) => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  incrementNeutral = (e) => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  incrementBad = (e) => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  increment = (e) => {
    this.setState((prevState) => {
      return {
        [this.state]: prevState + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round(Number.parseFloat(100 / total) * good);
  };

  render() {
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            incrementGood={this.incrementGood}
            incrementNeutral={this.incrementNeutral}
            incrementBad={this.incrementBad}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Fragment>
    );
  }
}
