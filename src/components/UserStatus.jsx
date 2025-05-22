
export default function UserStatus({status}){
    
    const statusColor = status ==='Ativo' ? 'green' : 'gray';

    return(
        <>
        <h2 style={{color: statusColor}}>Status: {status}</h2>
        </>
    );
}