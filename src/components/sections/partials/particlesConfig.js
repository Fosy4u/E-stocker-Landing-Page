const particlesConfig = {
  fullScreen: { enable: false, zIndex: 0 },

  particles: {
  
    links: {
      color: '#ffffff',
      distance: 70,
      enable: true,
      opacity: 0.5,
      width: 1,
    },

    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
  },
  detectRetina: true,
};

export default particlesConfig;
