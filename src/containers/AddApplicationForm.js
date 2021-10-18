import React from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../styles/AddApplicationForm.scss';

class AddApplicationForm extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			appList: props.context.applications,
			appState: '',
			versionStatus: '',
			appName: '',
			appGuid: '',
			appVersion: '',
			appVersionGuid: '',
			appVersionDate: new Date(),
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
		if (this.state.appState === '' || this.state.versionStatus === '') return false;
		return true;
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.validateForm()) {
			this.setState({
				Errors: false
			});
			const newApp = {
				guid: this.state.appGuid,
				name: this.state.appName,
				state: this.state.appState,
				versions: [
					{
						currentVersion: true,
						guid: this.state.appVersionGuid,
						name: this.state.appVersion,
						status: this.state.versionStatus,
						versionDate: new Date(this.state.appVersionDate).toISOString()
					}
				]
			};

			this.updateAppList(newApp);
			this.props.history.push('/');
		} else {
			this.setState({
				Errors: true
			});
		}
	};

	updateAppList = (newApp) => {
		let lists = this.state.appList;
		lists.push(newApp);
		this.setState({
			appList: lists
		});
	};

	render() {
		return (
			<div>
				<header className="form-header">Application Form</header>
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<FormControl required>
						<InputLabel htmlFor="app-name">New Application name</InputLabel>
						<Input
							id="app-name"
							name="appName"
							value={this.state.appName}
							onChange={this.handleChange}
							required
						/>
					</FormControl>
					<FormControl required>
						<InputLabel htmlFor="app-id">GUID</InputLabel>
						<Input
							id="app-id"
							name="appGuid"
							value={this.state.appGuid}
							onChange={this.handleChange}
							required
						/>
					</FormControl>
					<FormControl required>
						<InputLabel htmlFor="app-state">State</InputLabel>
						<Select
							value={this.state.appState}
							onChange={this.handleChange}
							inputProps={{
								name: 'appState',
								id: 'app-state'
							}}
							required
						>
							<MenuItem value="">Select</MenuItem>
							<MenuItem value="analysis_ready">Analysis Ready</MenuItem>
							<MenuItem value="analysis_succeed">Analysis Succeed</MenuItem>
						</Select>
					</FormControl>
					<FormControl required>
						<InputLabel htmlFor="version-no">Current Version name</InputLabel>
						<Input
							id="version-no"
							name="appVersion"
							value={this.state.appVersion}
							onChange={this.handleChange}
							required
						/>
					</FormControl>
					<FormControl required>
						<InputLabel htmlFor="version-id">version GUID</InputLabel>
						<Input
							id="version-id"
							name="appVersionGuid"
							value={this.state.appVersionGuid}
							onChange={this.handleChange}
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
							onChange={this.handleChange}
							required
						/>
					</FormControl>
					<FormControl required>
						<InputLabel htmlFor="version-no">version Status</InputLabel>
						<Select
							value={this.state.versionStatus}
							onChange={this.handleChange}
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
					<Button className="form-button" variant="contained" type="submit" value="Submit">
						Add Application
					</Button>
				</form>
				{this.state.Errors && <footer className="form-footer">Please select all the fields</footer>}
			</div>
		);
	}
}

AddApplicationForm.propTypes = {
	context: PropTypes.object.isRequired
};

export default AddApplicationForm;
