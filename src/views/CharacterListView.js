import React from "react";
import { connect } from "react-redux";
import { apiGet } from "../actions"
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.apiGet();
  }

  render() {
    if (this.props.fetching) {
      return <h1>Currently awaiting data...</h1>
    } else {
      console.log(this.props.characters);
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  characters: state.characters.items,
  fetching: state.characters.fetching
});
// posts: state.posts.items,
// newPost: state.posts.item

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, { apiGet })(CharacterListView);
