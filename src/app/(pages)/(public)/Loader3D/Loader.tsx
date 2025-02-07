import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600">
      <div className="relative w-60 h-60 flex items-center justify-center">
        {/* Outer Rotating Ring */}
        <div className="absolute w-full h-full rounded-full border-8 border-t-8 border-yellow-400 animate-spin-slow"></div>
        
        {/* Inner Rotating Ring */}
        <div className="absolute w-3/4 h-3/4 rounded-full border-8 border-t-8 border-purple-500 animate-spin-slower"></div>

        {/* Center Loader with Dots */}
        <div className="absolute w-24 h-24 flex items-center justify-center">
          <ThreeDots
            height="50"
            width="50"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;

<style jsx>{`
  /* Custom Smooth Spin Animation */
  @keyframes smooth-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Adding the smooth rotating effect */
  .animate-spin-smooth {
    animation: smooth-spin 2s linear infinite;
  }
`}</style>