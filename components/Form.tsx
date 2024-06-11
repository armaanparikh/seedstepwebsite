"use client";

import { useState } from "react";
// config
import config from "@/config/general";

const findRequestURL = (mail: string) => {
  const formURL = config.subscribeForm.split("/");
  const getNumbers = formURL.filter((item) => Number(item) && item);

  const accountID = getNumbers[0];
  const formID = getNumbers[1];

  const requestURL = `https://assets.mailerlite.com/jsonp/${accountID}/forms/${formID}/subscribe?fields[email]=${mail}`;

  return requestURL;
};

const Form = () => {
  const [mail, setMail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    fetch(findRequestURL(mail), {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage("Thanks for subscribing!");
        } else {
          setMessage("Something went wrong, please try again.");
        }
      })
      .catch(() => setMessage("Something went wrong, please try again."))
      .finally(() => {
        setMail("");
        setLoading(false);
      });
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto">
      <div className="flex">
        <input
          type="email"
          name="fields[email]"
          autoComplete="email"
          id="email"
          placeholder="Enter your email"
          className="form-control block w-full px-4 py-3 rounded-l-sm bg-gray text-base text-black placeholder-gray-500 focus:outline-none"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-sm bg-activeButton py-3 px-4 font-medium text-white shadow hover:bg-activeButtonHover disabled:cursor-not-allowed disabled:bg-activeButtonDisabled"
          disabled={mail === "" || loading}
        >
          {loading ? 'Submitting...' : 'Join Waitlist'}
        </button>
      </div>
      {message && (
        <span className="block text-sm px-2 mt-2 italic text-center text-red-500">{message}</span>
      )}
    </form>
  );
};

export default Form;
