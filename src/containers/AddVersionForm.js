import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class AddVersionForm extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			appList: props.context.applications,
			versionName: '',
			appVersionGuid: '',
			appVersionDate: new Date(),
			versionStatus: '',
			Errors: false
		};
	}
	handleChange = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		});
	};

	validateForm = () => {
		// TODO: validate for all fields
		if (this.state.versionStatus === '') return false;
		return true;
	};

	updateVersionList = (newVersion) => {
		const list = this.state.appList;
		const updatedList = list.map((item) => {
			if (item.guid.includes(this.props.match.params.guid)) {
				item.versions.map((version) => {
					if (version.currentVersion) version.currentVersion = false;
					return version;
				});
				item.versions.push(newVersion);
			}
			return item;
		});
		this.setState({
			appList: updatedList
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.validateForm()) {
			this.setState({
				Errors: false
			});
			const newVersion = {
				currentVersion: true,
				guid: this.state.appVersionGuid,
				name: this.state.versionName,
				status: this.state.versionStatus,
				versionDate: new Date(this.state.appVersionDate).toISOString()
			};

			this.updateVersionList(newVersion);
			this.props.history.push(`/detailed-view/${this.props.match.params.guid}`);
		} else {
			this.setState({
				Errors: true
			});
		}
	};

	render() {
		return (
			<div>
				<header className="form-header">Add version Form</header>
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<FormControl required>
						<InputLabel htmlFor="version-name">New version name</InputLabel>
						<Input
							id="version-name"
							name="versionName"
							value={this.state.versionName}
							onChange={(event) => this.handleChange(event)}
							required
						/>
					</FormControl>
					<FormControl required>
						<InputLabel htmlFor="version-id">version GUID</InputLabel>
						<Input
							id="version-id"
							name="appVersionGuid"
							value={this.state.appVersionGuid}
							onChange={(event) => this.handleChange(event)}
							required
						/>
					</FormControl>
					<FormControl required>
						<InputLabel htmlFor="version-date" />
						<Input
							id="version-date"
							label="version Date"
							type="date"
							name="appVersionDate"
							value={new Date(this.state.appVersionDate).toISOString().split('T')[0]}
							onChange={(event) => this.handleChange(event)}
							required
						/>
					</FormControl>
					<FormControl required>
						<InputLabel htmlFor="version-no">version Status</InputLabel>
						<Select
							value={this.state.versionStatus}
							onChange={(event) => this.handleChange(event)}
							inputProps={{
								name: 'versionStatus',
								id: 'version-no'
							}}
							required
						>
							<MenuItem value="">Select</MenuItem>
							<MenuItem value="accepted">Accepted</MenuItem>
							<MenuItem value="delivered">Delivered</MenuItem>
							<MenuItem value="opened">Opened</MenuItem>
							<MenuItem value="purged">Purged</MenuItem>
						</Select>
					</FormControl>

					<Button className='form-button' variant="contained" type="submit" value="Submit">
						Add
					</Button>
				</form>
				{this.state.Errors && <footer>Please select all the fields</footer>}
			</div>
		);
	}
}

AddVersionForm.propTypes = {
	context: PropTypes.object.isRequired
};

export default AddVersionForm;
