import './Users.css';
function Users(props)
{
    const {type,setup,punchline,id}=props;
    return(
        <div className="mycard">
            <h3>{type}</h3>
            <h4>{setup}</h4>
            <h5>{punchline}</h5>
            <h6>{id}</h6>
        </div>
    );
}
export default Users;