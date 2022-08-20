import PropTypes from 'prop-types';

export default function ShopScrollableCard({ image, name }) {
  return (
    <>
      <img
        src={image}
        className="w-full h-full object-cover brightness-50"
        alt=""
      />
      <a
        href="/#"
        className="absolute w-7/12 lg:text-sm md:text-base text-sm py-2
              border border-solid border-white text-white"
      >
        {name}
      </a>
    </>
  );
}

ShopScrollableCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
