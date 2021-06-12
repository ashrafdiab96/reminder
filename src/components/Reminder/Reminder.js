import react, {Component} from 'react';
import {connect} from 'react-redux';
import {add_reminder, remove_reminder, clear_reminders} from '../../actions/index';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment';
import './Reminder.css';

class Reminder extends Component {
    state = {
        text: '',
        date: new Date()
    };

    render_reminder = () => {
        const reminders = this.props.reminders;
        return (
            <div className="">
                {
                    reminders.map(reminder => {
                        return (
                            <div key={reminder.id} className="my_reminders">
                                <h2 className="mine_reminder">{reminder.text}</h2>
                                <h5 className="mine_date">{moment(new Date(reminder.date)).fromNow()}</h5>
                                <span className="close"
                                    onClick={() => this.props.remove_reminder(reminder.id)}
                                >X</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    };

    render() {
        return (
            <div className="main">
                <div className="logo">
                    <div className="p1"></div>
                    <div className="p2"></div>
                    <div className="p3"></div>
                    <div className="p4"></div>
                    <hr className="hr0" />
                    <hr className="hr1" />
                    <hr className="hr2" />
                    <hr className="hr3" />
                    <hr className="hr4" />
                </div>
                <h2 className="todo">What Should U Do?</h2>
                <div className="reminders">
                    <input
                        type="text"
                        value={this.state.text}
                        className="reminder"
                        placeholder="What Should I Do?"
                        onChange={(e) => this.setState({text: e.target.value})}
                    />
                    <br />
                    <DatePicker
                        selected={this.state.date}
                        onChange={(date) => {this.setState({date: date})}}
                        showTimeSelect
                        timeFormat="HH:mm"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                        value={this.state.date}
                        className="date"
                    />
                    <div className="controls">
                        <button
                            className="add"
                            onClick={() => {
                                this.props.add_reminder(this.state.text, this.state.date);
                                this.setState({text: '', date: new Date()});
                            }}
                        >
                                Add Reminder
                        </button>
                        <br />
                        {this.render_reminder()}
                        <button className="clear"
                            onClick={() => this.props.clear_reminders()}>Clear Reminders
                        </button>
                    </div>
                </div>
            </div>
        );
    };
}

export default connect(state => {return {reminders: state}}, {add_reminder, remove_reminder, clear_reminders})(Reminder);