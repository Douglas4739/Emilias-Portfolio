import React from 'react';
import './ContributorCard.css';

function ContributorCard({ place, name, amount }) {
  return (
    <div className="contributor-card">
      <p className="contributor-card__place">{place}</p>
      <p className="contributor-card__name">{name}</p>
      <p className="contributor-card__amount">${amount}</p>
    </div>
  );
}

export default ContributorCard;