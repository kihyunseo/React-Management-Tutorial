function Customer(props) {
  return (
    <>
      <CustomerProfile id={props.id} image={props.image} name={props.name} />
      <CustomerInfo
        name={props.name}
        birthday={props.birthday}
        gender={props.gender}
        job={props.job}
      />
    </>
  );
}

function CustomerProfile(props) {
  return (
    <>
      <img src={props.image} alt="이미지" />
      <h2>
        {props.name}({props.id})
      </h2>
    </>
  );
}

function CustomerInfo(props) {
  return (
    <>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.job}</p>
    </>
  );
}

export default Customer;
