/* eslint-disable max-len */
import React, { FC } from 'react';
import image from '~public/logo.png';

type TCheckoutModalProps = {
  isCheckoutClicked: boolean;
  setIsCheckoutClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CheckoutModal: FC<TCheckoutModalProps> = ({ setIsCheckoutClicked, isCheckoutClicked }) => (
  <div
    className="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      ></span>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <img src={image} alt="" />
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  It was a nice decision to choose Nice Gadgets store. Thank you
                  for your purchase. We appreciate your time and interest in our
                  shop. Have the greatest day! Hugs for you from our bunny🫂
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            onClick={() => setIsCheckoutClicked(!isCheckoutClicked)}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-gray hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3  sm:text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);
