import MyPost from "./Posts/MyPost";

const Profile = () =>{
    return(
        <div className='content'>
            <div>
              <img src='https://picsum.photos/800/400/?image=973'/>
            </div>
            <div>
              ava + desc

            </div>
            <MyPost/>
          </div>
    )
}
export default Profile;