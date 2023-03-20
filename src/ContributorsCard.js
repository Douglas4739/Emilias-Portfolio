import React from 'react';

function ContributorCard({ place, name, amount }) {
  return (
    <div>
      <p>{place}</p>
      <p>{name}</p>
      <p>{amount}</p>
    </div>
  );
}

export default ContributorCard;