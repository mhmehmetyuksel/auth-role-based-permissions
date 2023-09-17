import { users } from "../../../mock-data/users"

function Users() {
  return (
    <div>
       <p>Bu sayfada tüm kullanıcılar gözükeceği için sadece adminler görebilmeli.</p> 
       {users.map((user) => <p>{user.username} - {user.role}</p>)}
    </div>
  )
}

export default Users