import { abilities } from '../constants';

const FeatureCards = () => {
  // Define unique colors for each card based on their purpose
  const cardColors = {
    'Quality Focus': {
      iconBg: 'bg-gradient-to-r from-emerald-500/20 to-green-600/20',
      iconBgHover: 'group-hover:from-emerald-500/40 group-hover:to-green-600/40',
      shadowColor: 'hover:shadow-emerald-500/30',
      borderGradient: 'from-emerald-500 via-green-500 to-teal-500',
    },
    'Reliable Communication': {
      iconBg: 'bg-gradient-to-r from-blue-500/20 to-cyan-600/20',
      iconBgHover: 'group-hover:from-blue-500/40 group-hover:to-cyan-600/40',
      shadowColor: 'hover:shadow-blue-500/30',
      borderGradient: 'from-blue-500 via-cyan-500 to-indigo-500',
    },
    'On-Time Delivery': {
      iconBg: 'bg-gradient-to-r from-purple-500/20 to-pink-600/20',
      iconBgHover: 'group-hover:from-purple-500/40 group-hover:to-pink-600/40',
      shadowColor: 'hover:shadow-purple-500/30',
      borderGradient: 'from-purple-500 via-pink-500 to-rose-500',
    },
  };

  return (
    <section className="w-full padding-x-lg py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Me</h2>
          <p className="text-white-50 text-lg md:text-xl max-w-2xl mx-auto">
            Bringing dedication, expertise, and reliability to every project
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid-3-cols">
          {abilities.map(({ imgPath, title, desc }, index) => {
            const colors = cardColors[title];
            return (
              <div
                key={index}
                className={`relative group cursor-pointer rounded-xl p-8 flex flex-col gap-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-500 shadow-lg ${colors.shadowColor}`}
                style={{
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  const shadowColors = {
                    'Quality Focus': '0 0 40px rgba(16, 185, 129, 0.3)',
                    'Reliable Communication': '0 0 40px rgba(59, 130, 246, 0.3)',
                    'On-Time Delivery': '0 0 40px rgba(168, 85, 247, 0.3)',
                  };
                  e.currentTarget.style.boxShadow = shadowColors[title];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}
                ></div>

                <div
                  className={`size-16 flex items-center justify-center rounded-full ${colors.iconBg} ${colors.iconBgHover} transition-all duration-300`}
                >
                  <img
                    src={imgPath}
                    alt={title}
                    className="size-8 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white text-2xl font-semibold mt-2 group-hover:text-blue-300 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-white-50 text-lg group-hover:text-white transition-colors duration-300">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
