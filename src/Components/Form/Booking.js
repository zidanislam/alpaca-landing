import React from "react";
import "./Booking.css";

const Booking = () => {
  return (
    <div className="shape py-2">
      <div className="m-3 lg:pl-32">
        <h2 className="text-4xl mb-8">Boeken</h2>
        <hr className="m-0 w-52" />
        <p className="my-7 font-medium">
          Dien vandaag nog je verzoek in
          <br />& ontmoet binnenkort onze alpaca’s
        </p>
        <form>
          <input
            className="input w-full max-w-xs mb-10 md:mr-8 border-2 border-rose-400"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Naam"
          />
          <input
            className="input mb-10 w-full max-w-xs border-2 border-rose-400"
            type="text"
            id="lname"
            name="lastname"
            placeholder="Voornaam"
          />
          <br />
          <input
            className="input w-full max-w-xs mb-10 md:mr-8 border-2 border-rose-400"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="input w-full max-w-xs mb-10 border-2 border-rose-400"
            type="number"
            id="telefoon"
            name="number"
            placeholder="Telefoon"
          />
          <br />
          <p className="text-base font-semibold py-10">
            Activiteit (meerdere selecties mogelijk)
          </p>
        </form>
      </div>
          <div className="text-center">
            <input type="radio" id="radioleft" name="align" value="left" />
            <label
              className="m-1 check btn rounded-none border"
              for="radioleft"
            >
              Wandeling
            </label>
            <input type="radio" id="radiomiddle" name="align" value="middle" />
            <label
              className=" m-1 check btn rounded-none border"
              for="radiomiddle"
            >
              Luxewandeling
            </label>
            <input type="radio" id="radioright" name="align" value="right" />
            <label
              className="m-1 check btn rounded-none borde"
              for="radioright"
            >
              Fotoshoot
            </label>
          </div>
          <div className="text-center">
            <button
              className="confirm btn w-2/3 m-7"
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          </div>
    </div>
  );
};

export default Booking;
