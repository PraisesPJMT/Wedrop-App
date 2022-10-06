import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import City from './CityListItem';
import Icon from './Icon';

const CityList = ({ countryCities }) => {
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
          className="bg-cornflower-blue grid grid-cols-4 overflow-y-auto pt-0"
        >
          { countryCities.filter((city) => {
            const names = ['A', 'B', 'C', 'D', 'E'];
            return (names.includes(city.cityName.charAt(0))) ? city : null;
          }).map((city) => (
            <City
              key={city.cityId}
              country={city.country}
              cityName={city.cityName}
              continent={city.continent}
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
          Cities from F - J
        </AccordionHeader>
        <AccordionBody
          className="bg-cornflower-blue grid grid-cols-4 overflow-y-auto pt-0"
        >
          { countryCities.filter((city) => {
            const names = ['F', 'G', 'H', 'I', 'J'];
            return (names.includes(city.cityName.charAt(0))) ? city : null;
          }).map((city) => (
            <City
              key={city.cityId}
              country={city.country}
              cityName={city.cityName}
              continent={city.continent}
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
          Cities from K - O
        </AccordionHeader>
        <AccordionBody
          className="bg-cornflower-blue grid grid-cols-4 overflow-y-auto pt-0"
        >
          { countryCities.filter((city) => {
            const names = ['K', 'L', 'M', 'N', 'O'];
            return (names.includes(city.cityName.charAt(0))) ? city : null;
          }).map((city) => (
            <City
              key={city.cityId}
              country={city.country}
              cityName={city.cityName}
              continent={city.continent}
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
          Cities from P - T
        </AccordionHeader>
        <AccordionBody
          className="bg-cornflower-blue grid grid-cols-4 overflow-y-auto pt-0"
        >
          { countryCities.filter((city) => {
            const names = ['P', 'Q', 'R', 'S', 'T'];
            return (names.includes(city.cityName.charAt(0))) ? city : null;
          }).map((city) => (
            <City
              key={city.cityId}
              country={city.country}
              cityName={city.cityName}
              continent={city.continent}
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
          Cities from U - Z
        </AccordionHeader>
        <AccordionBody
          className="bg-cornflower-blue grid grid-cols-4 overflow-y-auto pt-0"
        >
          { countryCities.filter((city) => {
            const names = ['U', 'V', 'W', 'X', 'Y', 'Z'];
            return (names.includes(city.cityName.charAt(0))) ? city : null;
          }).map((city) => (
            <City
              key={city.cityId}
              country={city.country}
              cityName={city.cityName}
              continent={city.continent}
            />
          ))}
        </AccordionBody>
      </Accordion>
    </>
  );
};

CityList.propTypes = {
  countryCities: PropTypes.arrayOf(PropTypes.objectOf({
    cityId: PropTypes.string,
    cityName: PropTypes.string,
    country: PropTypes.string,
    continent: PropTypes.string,
    countryCities: PropTypes.objectOf({
      lon: PropTypes.number,
      lat: PropTypes.number,
    }).isRequired,
  })).isRequired,
};

export default CityList;
