import React from 'react';
import Partner from "./Partner/Partner";

const Partners = () => {
    return (
        <div className=" py-8 rounded-md bg-gray-200">
            <h2 className="text-center text-gray-900 font-bold tracking-wide text-2xl my-4">
                NOS PARTENAIRES
                <br />
                <span className="inline-block border-2 bg-green-700 border-green-700 w-40"></span>
            </h2>
            <p className="text-center text-gray-700 font-bold text-lg">
                Ils ont fait confiance à nos formations c'est pour cela qu''ils nous suivent depuis longtemps
            </p>
            <div className="flex items-center justify-center flex-wrap mt-4">
                <Partner/>
                <Partner/>
                <Partner/>
                <Partner/>
            </div>
        </div>
    );
};

export default Partners;