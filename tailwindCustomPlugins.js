export const responsiveLayout
  = () =>
    ({ matchUtilities, theme }) => {
      matchUtilities({
        'aspect-ratio': value => {
          const styles = value.split('/');
          const vwDesk = theme('viewport.desktop');

          return {
            width: '100%',
            height: 'fit-content',
            maxWidth: `${styles[0]}px`,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              display: 'block',
              width: '100%',
              paddingTop: `${(styles[1] / styles[0]) * 100}%`,
            },
            [`@media (min-width: ${vwDesk}px)`]: {
              maxWidth: `${(styles[0] / vwDesk) * 100}vw`,
            },
            img: {
              position: 'absolute',
              left: '0',
              top: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
          };
        },
        resp: value => {
          const styles = value.split('/');
          const vwDesk = theme('viewport.desktop');
          const vwTab = theme('viewport.tablet');
          const vwMob = theme('viewport.mobile');

          if (!styles[2]) {
            styles.push(styles[1]);
          }

          const formula = `calc(${styles[2]}px + ${
            styles[1] - styles[2]
          } * ((100vw - ${vwMob}px)/ ${vwDesk - vwMob}))`;
          const formulaTab = `calc(${styles[2]}px + ${
            styles[1] - styles[2]
          } * ((100vw - ${vwTab}px)/ ${vwDesk - vwTab}))`;
          const formulaMob = `calc(${styles[3]}px + ${
            styles[2] - styles[3]
          } * ((100vw - ${vwMob}px)/ ${vwTab - vwMob}))`;

          switch (styles[0]) {
            case 'font':
              if (!styles[3]) {
                return {
                  fontSize: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    fontSize: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  fontSize: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    fontSize: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    fontSize: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }
            case 'line-height':
              return {
                lineHeight: `calc(${styles[1]} / ${styles[2]})`,
              };

            case 'w-max':
              if (!styles[3]) {
                return {
                  maxWidth: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    maxWidth: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  maxWidth: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    maxWidth: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    maxWidth: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'w-min':
              if (!styles[3]) {
                return {
                  minWidth: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    minWidth: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  minWidth: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    minWidth: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    minWidth: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'width':
              if (!styles[3]) {
                return {
                  width: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    width: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  width: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    width: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    width: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'h-max':
              if (!styles[3]) {
                return {
                  maxHeight: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    maxHeight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  maxHeight: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    maxHeight: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    maxHeight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'h-min':
              if (!styles[3]) {
                return {
                  minHeight: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    minHeight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  minHeight: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    minHeight: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    minHeight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'height':
              if (!styles[3]) {
                return {
                  height: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    height: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  height: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    height: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    height: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'px':
              if (!styles[3]) {
                return {
                  paddingLeft: `${formula}`,
                  paddingRight: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingLeft: `${(styles[1] / vwDesk) * 100}vw`,
                    paddingRight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  paddingLeft: `${formulaMob}`,
                  paddingRight: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    paddingLeft: `${formulaTab}`,
                    paddingRight: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingLeft: `${(styles[1] / vwDesk) * 100}vw`,
                    paddingRight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'py':
              if (!styles[3]) {
                return {
                  paddingTop: `${formula}`,
                  paddingBottom: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingTop: `${(styles[1] / vwDesk) * 100}vw`,
                    paddingBottom: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  paddingTop: `${formulaMob}`,
                  paddingBottom: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    paddingTop: `${formulaTab}`,
                    paddingBottom: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingTop: `${(styles[1] / vwDesk) * 100}vw`,
                    paddingBottom: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'pt':
              if (!styles[3]) {
                return {
                  paddingTop: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingTop: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  paddingTop: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    paddingTop: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingTop: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'pr':
              if (!styles[3]) {
                return {
                  paddingRight: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingRight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  paddingRight: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    paddingRight: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingRight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'pb':
              if (!styles[3]) {
                return {
                  paddingBottom: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingBottom: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  paddingBottom: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    paddingBottom: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingBottom: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'pl':
              if (!styles[3]) {
                return {
                  paddingLeft: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingLeft: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  paddingLeft: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    paddingLeft: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    paddingLeft: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'mx':
              if (!styles[3]) {
                return {
                  marginLeft: `${formula}`,
                  marginRight: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginLeft: `${(styles[1] / vwDesk) * 100}vw`,
                    marginRight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  marginLeft: `${formulaMob}`,
                  marginRight: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    marginLeft: `${formulaTab}`,
                    marginRight: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginLeft: `${(styles[1] / vwDesk) * 100}vw`,
                    marginRight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'my':
              if (!styles[3]) {
                return {
                  marginTop: `${formula}`,
                  marginBottom: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginTop: `${(styles[1] / vwDesk) * 100}vw`,
                    marginBottom: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  marginTop: `${formulaMob}`,
                  marginBottom: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    marginTop: `${formulaTab}`,
                    marginBottom: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginTop: `${(styles[1] / vwDesk) * 100}vw`,
                    marginBottom: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'mt':
              if (!styles[3]) {
                return {
                  marginTop: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginTop: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  marginTop: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    marginTop: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginTop: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'mr':
              if (!styles[3]) {
                return {
                  marginRight: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginRight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  marginRight: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    marginRight: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginRight: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'mb':
              if (!styles[3]) {
                return {
                  marginBottom: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginBottom: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  marginBottom: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    marginBottom: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginBottom: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'ml':
              if (!styles[3]) {
                return {
                  marginLeft: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginLeft: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  marginLeft: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    marginLeft: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    marginLeft: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'gap':
              if (!styles[3]) {
                return {
                  gap: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    gap: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  gap: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    gap: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    gap: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'gap-x':
              if (!styles[3]) {
                return {
                  columnGap: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    columnGap: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  columnGap: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    columnGap: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    columnGap: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'gap-y':
              if (!styles[3]) {
                return {
                  rowGap: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    rowGap: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  rowGap: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    rowGap: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    rowGap: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'right':
              if (!styles[3]) {
                return {
                  right: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    right: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  right: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    right: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    right: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'left':
              if (!styles[3]) {
                return {
                  left: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    left: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  left: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    left: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    left: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'top':
              if (!styles[3]) {
                return {
                  top: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    top: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  top: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    top: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    top: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }

            case 'bottom':
              if (!styles[3]) {
                return {
                  bottom: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    bottom: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              } else {
                return {
                  bottom: `${formulaMob}`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    bottom: `${formulaTab}`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    bottom: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                };
              }
            case 'svg-size':
              return {
                svg: {
                  width: `calc(${styles[2]}px + ${
                    styles[1] - styles[2]
                  } * ((100vw - ${vwMob}px)/ ${vwDesk - vwMob}))`,
                  height: `calc(${styles[4]}px + ${
                    styles[3] - styles[4]
                  } * ((100vw - ${vwMob}px)/ ${vwDesk - vwMob}))`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    width: `${(styles[1] / vwDesk) * 100}vw`,
                    height: `${(styles[3] / vwDesk) * 100}vw`,
                  },
                },
              };

            case 'svg-width':
              if (!styles[3]) {
                return {
                  width: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    width: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                  svg: {
                    width: `${formula}`,
                    [`@media (min-width: ${vwDesk}px)`]: {
                      width: `${(styles[1] / vwDesk) * 100}vw`,
                    },
                  },
                };
              } else {
                return {
                  width: `${formulaMob}`,
                  svg: {
                    width: `${formulaMob}`,
                    [`@media (min-width: ${vwTab}px)`]: {
                      width: `${formulaTab}`,
                    },
                    [`@media (min-width: ${vwDesk}px)`]: {
                      width: `${(styles[1] / vwDesk) * 100}vw`,
                    },
                  },
                };
              }

            case 'svg-height':
              if (!styles[3]) {
                return {
                  height: `${formula}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    height: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                  svg: {
                    height: `${formula}`,
                    [`@media (min-width: ${vwDesk}px)`]: {
                      height: `${(styles[1] / vwDesk) * 100}vw`,
                    },
                  },
                };
              } else {
                return {
                  height: `${formulaMob}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    height: `${(styles[1] / vwDesk) * 100}vw`,
                  },
                  svg: {
                    height: `${formulaMob}`,
                    [`@media (min-width: ${vwTab}px)`]: {
                      height: `${formulaTab}`,
                    },
                    [`@media (min-width: ${vwDesk}px)`]: {
                      height: `${(styles[1] / vwDesk) * 100}vw`,
                    },
                  },
                };
              }
            case 'translate':
              return {
                transform: `translate(calc(${styles[2]}px + ${
                  styles[1] - styles[2]
                } * ((100vw - ${vwMob}px)/ ${vwDesk - vwMob})) , calc(${
                  styles[4]
                }px + ${styles[3] - styles[4]} * ((100vw - ${vwMob}px)/ ${
                  vwDesk - vwMob
                })))`,
                [`@media (min-width: ${vwDesk}px)`]: {
                  transform: `translate(${(styles[1] / vwDesk) * 100}vw, ${
                    (styles[3] / vwDesk) * 100
                  }vw)`,
                },
              };

            case 'translate-y':
              if (!styles[3]) {
                return {
                  transform: `translateY(${formula})`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    transform: `translateY(${(styles[1] / vwDesk) * 100}vw)`,
                  },
                };
              } else {
                return {
                  transform: `translateY(${formulaMob})`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    transform: `translateY(${formulaTab})`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    transform: `translateY(${(styles[1] / vwDesk) * 100}vw)`,
                  },
                };
              }

            case 'translate-x':
              if (!styles[3]) {
                return {
                  transform: `translateX(${formula})`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    transform: `translateX(${(styles[1] / vwDesk) * 100}vw)`,
                  },
                };
              } else {
                return {
                  transform: `translateX(${formulaMob})`,
                  [`@media (min-width: ${vwTab}px)`]: {
                    transform: `translateX(${formulaTab})`,
                  },
                  [`@media (min-width: ${vwDesk}px)`]: {
                    transform: `translateX(${(styles[1] / vwDesk) * 100}vw)`,
                  },
                };
              }
            case 'grid-col':
              return {
                display: `grid`,
                'grid-template-columns': `repeat(auto-fit, minmax(${styles[1]}px, 1fr))`,
                [`@media (min-width: ${vwDesk}px)`]: {
                  'grid-template-columns': `repeat(auto-fit, minmax(${
                    (styles[1] / vwDesk) * 100
                  }vw, 1fr))`,
                },
              };
            case 'basis':
              if (styles[3]) {
                return {
                  'flex-basis': `${formula}`,
                  'flex-shrink': `${styles[3]}`,
                  [`@media (min-width: ${vwDesk}px)`]: {
                    'flex-basis': `${(styles[1] / vwDesk) * 100}vw`,
                    'flex-shrink': `${styles[3]}`,
                  },
                };
              }

              return {
                'flex-basis': `${formula}`,
                [`@media (min-width: ${vwDesk}px)`]: {
                  'flex-basis': `${(styles[1] / vwDesk) * 100}vw`,
                },
              };
          }
        },
      });
    };
