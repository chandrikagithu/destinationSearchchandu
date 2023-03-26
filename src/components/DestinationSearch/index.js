// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachList =>
      eachList.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-bar-bg">
          <input
            type="search"
            placeholder="search"
            className="input-search"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
            className="search-icon"
            value={searchInput}
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachList => (
            <DestinationItem destinationDetails={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
