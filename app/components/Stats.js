import React from 'react';
import StatsStore from '../stores/StatsStore'
import StatsActions from '../actions/StatsActions';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = StatsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    StatsStore.listen(this.onChange);
    StatsActions.getStats();
  }

  componentWillUnmount() {
    StatsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <div className='panel panel-default'>
          <table className='table table-striped'>
            <thead>
            <tr>
              <th colSpan='2'>Stats</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Total votes cast</td>
              <td>{this.state.totalVotes}</td>
            </tr>
            <tr>
              <td>Offense characters</td>
              <td>{this.state.OffenseCount}</td>
            </tr>
            <tr>
              <td>Defense characters</td>
              <td>{this.state.DefenseCount}</td>
            </tr>
            <tr>
              <td>Tank characters</td>
              <td>{this.state.TankCount}</td>
            </tr>
            <tr>
              <td>Support characters</td>
              <td>{this.state.SupportCount}</td>
            </tr>
            <tr>
              <td>Total number of characters</td>
              <td>{this.state.totalCount}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Stats;
