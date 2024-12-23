import { useState } from 'react';

const Article = (props) => {
  console.log(props);
  const [para, setPara] = useState(false);
  return (
    <>
      <h1>{props.title}</h1>
      <button onClick={() => setPara(true)}>Know More</button>
      {para && <p>{props.content}</p>}
    </>
  );
};

const About = (props) => {
  const [para, setPara] = useState(false);
  return (
    <>
      <h1>{props.heading}</h1>
      <h2>{props.name}</h2>
      <button onClick={() => setPara(true)}>Know More</button>
      {para && <p>{props.learning}</p>}
    </>
  );
};

const UserInfo = (props) => {
  console.log(props);
  const [para, setPara] = useState(false);
  return (
    <>
      <h1>User Information</h1>
      <p>
        <b>Username: </b>
        {props.username}
      </p>

      {para ? (
        <>
          <p>
            <b>Email: </b>
            {props.email}
          </p>
          <p>
            <b>Age: </b>
            {props.age}
          </p>
        </>
      ) : (
        <button onClick={() => setPara(true)}>See Profile</button>
      )}
    </>
  );
};

const UserProfile = (props) => {
  const [para, setPara] = useState(false);
  return (
    <>
      <h1>User Profile</h1>
      <p>
        <b>Username: </b>
        {props.username}
      </p>

      {para ? (
        <>
          <img src={props.imageUrl} alt="" />
          <p>
            <b>Bio: </b>
            {props.bio}
          </p>
          <p>
            <b>Location: </b>
            {props.location}
          </p>
        </>
      ) : (
        <button onClick={() => setPara(true)}>View Profile</button>
      )}
    </>
  );
};

const ProductDetails = (props) => {
  const [para, setPara] = useState(false);

  return (
    <>
      <h1>Product Details</h1>
      <p>
        <b>Product Name: </b>
        {props.productName}
      </p>

      {para ? (
        <>
          {' '}
          <p>
            <b>Description:</b> {props.description}
          </p>
          <p>
            <b>Price: </b> ${props.price}
          </p>
        </>
      ) : (
        <button onClick={() => setPara(true)}>Show Details</button>
      )}
    </>
  );
};

export default function App() {
  const title = 'React is awesome';
  const content = 'React is a JavaScript library for building user interfaces.';

  const heading = 'About Me';
  const name = 'Shamayil';
  const learning = 'I am learning React JS currently at neoG Camp.';

  return (
    <>
      <Article title={title} content={content} />
      <br />
      <About heading={heading} name={name} learning={learning} />
      <br />
      <UserInfo username="Shamayil" email="shamayil@test.com" age={23} />
      <br />
      <UserProfile
        username="Jane Doe"
        imageUrl="https://placehold.co/200"
        bio="Frontend Developer"
        location="New York"
      />
      <br />
      <ProductDetails
        productName="Smartphone"
        description="High-performance smartphone with advanced features."
        price={599.99}
      />
    </>
  );
}
