import React from 'react';
import ContributorCard from './ContributorsCard.js';
import './ContributorsList.css';

function ContributorsList({ contributors }) {
  return (
    <div className='contributors-list'>
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