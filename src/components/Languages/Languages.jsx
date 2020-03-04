import React from 'react';
import LanguageIcon from '../../assets/svg/language/LanguageIcon';

const Languages = () => {
  return (
    <a href="fr.fr" className="flex justify-between items-center">
      <div>
        <LanguageIcon />
      </div>
      <div className="ml-2 font-bold text-gray-900">Langues</div>
    </a>
  );
};

export default Languages;
