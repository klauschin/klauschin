import Link from 'next/link';

const BrandLogo = () => {
  return (
    <>
      <Link href="/">
        <a className="brand-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            viewBox="0 0 90 90"
          >
            <defs>
              <linearGradient
                id="prefix__a"
                x1="44.57"
                y1="89.14"
                x2="44.57"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#fff" />
                <stop offset=".16" stopColor="#fdfdfd" />
                <stop offset=".24" stopColor="#f5f5f5" />
                <stop offset=".29" stopColor="#e9e9e9" />
                <stop offset=".34" stopColor="#d6d6d6" />
                <stop offset=".38" stopColor="#bfbfbf" />
                <stop offset=".42" stopColor="#a2a2a2" />
                <stop offset=".45" stopColor="#7f7f7f" />
                <stop offset=".49" stopColor="#575757" />
                <stop offset=".52" stopColor="#2a2a2a" />
                <stop offset=".54" />
              </linearGradient>
              <linearGradient
                id="prefix__b"
                x1="44.57"
                y1="12.16"
                x2="44.57"
                y2="76.99"
                xlinkHref="#prefix__a"
              />
            </defs>
            <circle cx="44.57" cy="44.57" r="44.57" fill="url(#prefix__a)" />
            <circle cx="44.57" cy="44.57" r="32.42" fill="url(#prefix__b)" />
            <circle cx="44.57" cy="44.57" r="19.65" fill="#fff" />
          </svg>
        </a>
      </Link>
      <style jsx>{`
        .brand-logo {
          display: inline-block;
          width: 50px;
          height: 50px;
          svg {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default BrandLogo;
