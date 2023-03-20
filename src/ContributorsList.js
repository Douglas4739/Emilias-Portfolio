import React from 'react';
import ContributorCard from './ContributorsCard.js';

function ContributorsList({ contributors }) {
  return (
    <div>
      {contributors.map((contributor, index) => (
        <ContributorCard
          key={contributor.name}
          place={index + 1}
          name={contributor.name}
          amount={contributor.amount}
        />
      ))}
    </div>
  );
}

export default ContributorsList;