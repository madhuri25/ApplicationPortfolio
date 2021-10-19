import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import ZoomIn from "@material-ui/icons/ZoomIn";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../styles/HomePage.scss";

const Currentversion = ({ versionList }) => {
  let currentVersion = "";
  for (let index = 0; index < versionList.length; index++) {
    if (versionList[index].currentVersion) {
      currentVersion = (
        <TableCell align="center">{versionList[index].name}</TableCell>
      );
      break;
    }
  }
  return (
    currentVersion ||
    (!currentVersion && <TableCell align="center">Unavailable</TableCell>)
  );
};

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      appList: props.context.applications,
      filteredList: {},
      searchText: "",
    };
  }

  handleChange = (event) => {
    const filterList = this.state.appList.filter((item) =>
      item.name ? item.name.toLowerCase().includes(event.target.value) : ""
    );
    this.setState({
      filteredList: filterList,
      searchText: event.target.value,
    });
  };

  onAdd = () => {
    this.props.history.push("/add-application");
  };

  onDelete = (id) => {
    const filterList = this.state.appList.filter((item) =>
      item.guid ? !item.guid.includes(id) : false
    );
    this.setState({
      appList: filterList,
    });
  };

  render() {
    const list =
      (this.state.searchText !== "" && this.state.filteredList) ||
      this.state.appList;
    this.props.context.applications = this.state.appList;
    return (
      <div>
        <div className="search-wrapper">
          <span>Hello, Welcome User!</span>
          <div className="search-box">
            <SearchIcon className="searchIconWrapper" />
            <input
              type="text"
              placeholder="Search…"
              value={this.state.searchText}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
        </div>
        <Paper className="table-wrapper">
          <Table>
            <TableHead className="table-head">
              <TableRow>
                <TableCell className="table-cell">Application Name</TableCell>
                <TableCell align="center" className="table-cell">
                  GUID
                </TableCell>
                <TableCell align="center" className="table-cell">
                  State
                </TableCell>
                <TableCell align="center" className="table-cell">
                  Total Versions
                </TableCell>
                <TableCell align="center" className="table-cell">
                  Current Version
                </TableCell>
                <TableCell align="center" className="table-cell">Details</TableCell>
                <TableCell align="center" className="table-cell">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow key={row.guid}>
                  <TableCell component="th" scope="row" className="table-cell">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" className="table-cell">
                    {row.guid}
                  </TableCell>
                  <TableCell align="center" className="table-cell">
                    {row.state.toString()}
                  </TableCell>
                  <TableCell align="center" className="table-cell">
                    {row.versions.length}
                  </TableCell>
                  <Currentversion versionList={row.versions} />
                  <TableCell className="table-cell" align="center">
                    <Link
                      className="link-wrapper"
                      to={{ pathname: `/detailed-view/${row.guid}` }}
                    >
                      <ZoomIn />
                    </Link>
                  </TableCell>
                  <TableCell className="table-cell" align="center">
                    <Button onClick={() => this.onDelete(row.guid)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {this.state.searchText !== "" &&
            this.state.filteredList.length === 0 && (
              <div className="no-result-text">0 search result</div>
            )}
        </Paper>
        <div className="add-button">
          <Button variant="contained" onClick={() => this.onAdd()}>
            Add Application
          </Button>
        </div>
      </div>
    );
  }
}
HomePage.propTypes = {
  context: PropTypes.object.isRequired,
};

export default withRouter(HomePage);
