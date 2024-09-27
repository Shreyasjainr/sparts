import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md p-4 flex justify-between items-center">

      <div className="flex items-center space-x-2">
        <img src="https://s3-alpha-sig.figma.com/img/4646/a362/62ec5e17a75bcfefbd65a763f6789615?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MRKs3QWw0NqDioNJDIiTip7iP6wkuNFAnMQByjPG1U6QbxPwO3ui0iGi-32fDAw4St8-P2BgKiIXTEUVW5KRvAMbzySRJrGm09JX9FzpjwhjgpIyJWJv6Y1QzZOQF7-7ymJJa2b5QH-ypVt-Xe6xp7C5NoH6-ocRX3E6PLWi0BFmfnit6mVBqkvi1j~1wK~w2NEQswTh1MnvqUD3oo~6NUKRuwl2OSlr-twnFI5FBgJDRfoa6ZDquq-oX6vyMrvGw5Sk5kYQAinCOnEOkAlRfhupyBpeq3T6p9OhtGbT0Ju9WYnSW0PJDHPL1gL4r5x8CU9TB0cva4N8Ch8mlpmsnw__" alt="Logo" className="w-22 h-12" />
   
      </div>


      <div className="flex-grow mx-10">
        <input
          type="text"
          placeholder="Search students by name"
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
        />
      </div>

      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/7922/0441/f4b76eec69718cf76dbf92f75879a88f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B9TsPB5oBFKYauH1AqFvYAfsgSrKD9AAhg4A6hrCbjSsDUSkL~3EuRTpA39y-7gCYuimf-YP76Lz1K4nLwxcwCxLluxfHZWBjDQVj1krJPl2fzUqtELUizga5KS5vkODpF8JYu4Z90Do0EfNP2UKazisRy3MsPRwVvb1PBK25M8a8ycfffoinS5DbSeff-sappQZqCgVLHTuQhXITH1Fk0bRjHCdMk9cCK-h-Nj~ZEJXSte1VIPiV9g4erM0pM2DvGRqBf7FbnP0EEy3uOZBdxnosid1z-8j7vdsJHlvyFUXDLRGE--Qo1nOzi6sHezQchUF~KnunN881ZHn0SLXSg__"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
