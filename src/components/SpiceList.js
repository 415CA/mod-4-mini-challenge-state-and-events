import React from 'react';
import SpiceItem from './SpiceItem';

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: '',
  };

  setSearch = (spiceSearch) => {
    this.setState({
      search: spiceSearch,
    });
  };


  renderSpices() {
    let filteredSpices = this.props.spices
      .filter(spice => this.state.fourStarOnly ? spice.rating >= 4 : true)
      .filter(spice => spice.notes.toLowerCase().includes(this.state.search.toLowerCase()))

    return filteredSpices.map((spice) => (
      <SpiceItem key={spice.id} spice={spice} />
    ));
  }

  stars = () => this.setState({ fourStarOnly: !this.state.fourStarOnly });

  searchEvent = (event) => {
    const userSearch = event.target.value;
    this.setState({ search: userSearch });
  };

  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input
                onChange={this.searchEvent}
                type="text"
                placeholder="Search By Tasting Notes..."
              />
            </div>
            <label>
              4 Star Only <input onChange={this.stars} type="checkbox" value={this.state.search} />
            </label>
          </div>
        </div>
        {this.renderSpices()}
      </section>
    );
  }
}

export default SpiceList;
