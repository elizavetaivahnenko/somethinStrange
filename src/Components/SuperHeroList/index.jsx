import React from 'react'
import { createUser } from '../../actions';
import { connect } from 'react-redux';

const SuperHeroList = (props) => {
  const { users, img,name } = props;

  const mapUsers = (u) => {
    return (
      <>
      <li key={u}>
         {u.name}
      </li>
        <img key={u} src={u.img} alt="#" />
        </>
    )
  }
  return (
    <ul>{users.map(mapUsers)}</ul>
  )
}


const mapStateToProps = (state) => state.superheroReducer.js;

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: newUser => { dispatch(createUser(newUser)) }
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(SuperHeroList)