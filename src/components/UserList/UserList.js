import React from 'react'
import { Card } from '../../UI/Card'
import { UserItem } from './UserItem'

export const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map(user => (
          <UserItem
            key={user.id}
            id={user.id}
            userName={user.userName}
            age={user.age}
            onDelete={props.onDelete} />)
        )}
      </ul>
    </Card>
  )
}
