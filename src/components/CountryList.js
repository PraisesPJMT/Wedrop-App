import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import Icon from './Icon';
import Country from './CountryListItem';

const CountryList = ({ countries }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Accordion
        className="border-grey-lighter bg-dark-blue cursor-pointer"
        open={open === 1}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader className="px-4 font-bold text-[1rem]" onClick={() => handleOpen(1)}>
          Countries from A - E
        </AccordionHeader>
        <AccordionBody
          className="bg-cornflower-blue grid grid-cols-2 overflow-y-auto pt-0"
        >
          { countries.filter((country) => {
            const names = ['A', 'B', 'C', 'D', 'E'];
            return (names.includes(country.countryName.charAt(0))) ? country : null;
          }).map((country) => (
            <Country
              key={country.countryName}
              cityCount={country.cityCount}
              countryName={country.countryName}
              continent={country.continent}
            />
          ))}
        </AccordionBody>
      </Accordion>
      <Accordion
        className="border-grey-lighter bg-dark-blue cursor-pointer"
        open={open === 2}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader className="px-4 font-bold text-[1rem]" onClick={() => handleOpen(2)}>
          Countries from F - J
        </AccordionHeader>
        <AccordionBody
          className="bg-cornflower-blue grid grid-cols-2 overflow-y-auto pt-0"
        >
          { countries.filter((country) => {
            const names = ['F', 'G', 'H', 'I', 'J'];
            return (names.includes(country.countryName.charAt(0))) ? country : null;
          }).map((country) => (
            <Country
              key={country.countryName}
              cityCount={country.cityCount}
              countryName={country.countryName}
              continent={country.continent}
            />
          ))}
        </AccordionBody>
      </Accordion>
      <Accordion
        className="border-grey-lighter bg-dark-blue cursor-pointer"
        open={open === 3}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader className="px-4 font-bold text-[1rem]" onClick={() => handleOpen(3)}>
          Countries from K - O
        </AccordionHeader>
        <AccordionBody
          className="bg-cornflower-blue grid grid-cols-2 overflow-y-auto pt-0"
        >
          { countries.filter((country) => {
            const names = ['K', 'L', 'M', 'N', 'O'];
            return (names.includes(country.countryName.charAt(0))) ? country : null;
          }).map((country) => (
            <Country
              key={country.countryName}
              cityCount={country.cityCount}
              countryName={country.countryName}
              continent={country.continent}
            />
          ))}
        </AccordionBody>
      </Accordion>
      <Accordion
        className="border-grey-lighter bg-dark-blue cursor-pointer"
        open={open === 4}
        icon={<Icon id={4} open={open} />}
      >
        <AccordionHeader className="px-4 font-bold text-[1rem]" onClick={() => handleOpen(4)}>
          Countries from P - T
        </AccordionHeader>
        <AccordionBody
          className="bg-cornflower-blue grid grid-cols-2 overflow-y-auto pt-0"
        >
          { countries.filter((country) => {
            const names = ['P', 'Q', 'R', 'S', 'T'];
            return (names.includes(country.countryName.charAt(0))) ? country : null;
          }).map((country) => (
            <Country
              key={country.countryName}
              cityCount={country.cityCount}
              countryName={country.countryName}
              continent={country.continent}
            />
          ))}
        </AccordionBody>
      </Accordion>
      <Accordion
        className="border-grey-lighter bg-dark-blue cursor-pointer"
        open={open === 5}
        icon={<Icon id={5} open={open} />}
      >
        <AccordionHeader className="px-4 font-bold text-[1rem]" onClick={() => handleOpen(5)}>
          Countries from U - Z
        </AccordionHeader>
        <AccordionBody
          className="bg-cornflower-blue grid grid-cols-2 overflow-y-auto pt-0"
        >
          { countries.filter((country) => {
            const names = ['U', 'V', 'W', 'X', 'Y', 'Z'];
            return (names.includes(country.countryName.charAt(0))) ? country : null;
          }).map((country) => (
            <Country
              key={country.countryName}
              cityCount={country.cityCount}
              countryName={country.countryName}
              continent={country.continent}
            />
          ))}
        </AccordionBody>
      </Accordion>
    </>
  );
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    countryId: PropTypes.string,
    countryName: PropTypes.string,
    continent: PropTypes.string,
    cityCount: PropTypes.number,
    countryCities: PropTypes.arrayOf(PropTypes.shape({
      cityId: PropTypes.string,
      cityName: PropTypes.string,
      continent: PropTypes.string,
      country: PropTypes.string,
      coordinates: PropTypes.shape({
        lon: PropTypes.number,
        lat: PropTypes.number,
      }).isRequired,
    })).isRequired,
  })).isRequired,
};

export default CountryList;
